<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/bloc_saisie_absence/SaisieAbsenceController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/07/2020 13:04

namespace App\Controller\bloc_saisie_absence;

use App\Classes\Etudiant\EtudiantAbsences;
use App\Controller\BaseController;
use App\Entity\Absence;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Classes\MyAbsences;
use App\Classes\MyGroupes;
use App\Classes\Tools;
use App\Entity\Semestre;
use App\Repository\AbsenceRepository;
use App\Repository\CalendrierRepository;
use App\Repository\CelcatEventsRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\MatiereRepository;
use App\Repository\TypeGroupeRepository;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use DateTime;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function count;

/**
 * Class AbsenceController
 * @package App\Controller
 * @Route("/application/personnel/absence")
 * @IsGranted("ROLE_PERMANENT")
 */
class SaisieAbsenceController extends BaseController
{
    private MyAbsences $myAbsences;

    /**
     * AbsenceController constructor.
     *
     * @param MyAbsences $myAbsences
     */
    public function __construct(MyAbsences $myAbsences)
    {
        $this->myAbsences = $myAbsences;
    }


    public function index(
        MatiereRepository $matiereRepository,
        TypeGroupeRepository $typeGroupeRepository,
        Semestre $semestre,
        Matiere $matiere = null
    ): Response {


        return $this->render('bloc_saisie_absence/_saisie_absence.html.twig', [
            'matiere'     => $matiere,
            'matieres'    => $matiereRepository->findBySemestre($semestre),
            'typeGroupes' => $typeGroupeRepository->findBySemestre($semestre),
        ]);
    }

    /**
     * @Route("/ajax/absences/{matiere}", name="application_personnel_absence_get_ajax", methods="GET",
     *                                    options={"expose":true})
     * @param AbsenceRepository $absenceRepository
     * @param Matiere           $matiere
     *
     * @return JsonResponse
     */
    public function ajaxGetAbsencesMatiere(
        AbsenceRepository $absenceRepository,
        Matiere $matiere
    ): JsonResponse {
        $absences = $absenceRepository->getByMatiereArray(
            $matiere,
            $matiere->getSemestre() ? $matiere->getSemestre()->getAnneeUniversitaire() : null
        );

        return $this->json($absences);
    }

    /**
     * @Route("/ajax/saisie/{matiere}/{etudiant}", name="application_personnel_absence_saisie_ajax", methods="POST",
     *                                             options={"expose":true})
     * @param EtudiantAbsences  $etudiantAbsences
     * @param AbsenceRepository $absenceRepository
     * @param Request           $request
     * @param Matiere           $matiere
     * @param Etudiant          $etudiant
     *
     * @return JsonResponse|Response
     * @throws Exception
     */
    public function ajaxSaisie(
        EtudiantAbsences $etudiantAbsences,
        AbsenceRepository $absenceRepository,
        Request $request,
        Matiere $matiere,
        Etudiant $etudiant
    ) {
        $dateHeure = Tools::convertDateHeureToObject($request->request->get('date'), $request->request->get('heure'));
        $absence = $absenceRepository->findBy([
            'matiere'            => $matiere->getId(),
            'etudiant'           => $etudiant->getId(),
            'dateHeure'          => $dateHeure,
            'anneeUniversitaire' => $etudiant->getSemestre() ? $etudiant->getSemestre()->getAnneeUniversitaire()->getId() : 0
        ]);

        if ($request->get('action') === 'saisie' && count($absence) === 0) {
            if ($this->saisieAutorise($matiere->getSemestre()->getOptNbJoursSaisieAbsence(), $dateHeure)) {
                $etudiantAbsences->setEtudiant($etudiant);

                $etudiantAbsences->addAbsence(
                    $dateHeure,
                    $matiere,
                    $this->getConnectedUser()
                );

                $absences = $absenceRepository->getByMatiereArray(
                    $matiere,
                    $matiere->getSemestre() ? $matiere->getSemestre()->getAnneeUniversitaire() : null
                );

                return $this->json($absences);
            }

            return new response('out', 500);
        }

        if (count($absence) === 1) {


            //un tableau, donc une absence ?
            $etudiantAbsences->removeAbsence($absence[0]);

            $absences = $absenceRepository->getByMatiereArray(
                $matiere,
                $matiere->getSemestre()->getAnneeUniversitaire()
            );

            return $this->json($absences);
        }

        return new response('nok', 500);
    }

    /**
     * @param                 $nbjour
     *
     * @param CarbonInterface $datesymfony
     *
     * @return bool
     */
    private function saisieAutorise($nbjour, CarbonInterface $datesymfony): bool
    {
        return $nbjour === 0 ? true : ($datesymfony->diffInDays(Carbon::now()) <= $nbjour);
    }
}
