<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appEtudiant/CovidController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/11/2020 14:34

namespace App\Controller\appEtudiant;

use App\Classes\Covid\MyExportPresence;
use App\Controller\BaseController;
use App\Entity\Absence;
use App\Entity\CovidAttestationEtudiant;
use App\Repository\CovidAttestationEtudiantRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class AbsenceController
 * @package App\Controller
 * @Route("/application/etudiant/covid")
 */
class CovidController extends BaseController
{
    public function index(CovidAttestationEtudiantRepository $covidAttestationEtudiantRepository): Response
    {

        return $this->render('appEtudiant/covid/_index.html.twig', [
            'convocations' => $covidAttestationEtudiantRepository->findNext($this->getConnectedUser())
        ]);
    }

    /**
     *
     * @Route("/export/{id}.pdf", name="app_etudiant_covid_attestation_pdf")
     * @ParamConverter("absence", options={"mapping": {"uuid": "uuid"}})
     *
     * @param MyExportPresence         $myExportPresence
     * @param CovidAttestationEtudiant $attestationEtudiant
     *
     * @return Response
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function details(MyExportPresence $myExportPresence, CovidAttestationEtudiant $attestationEtudiant): Response
    {
        //vérifier s'il est autorisé
        $autorise = false;
        foreach ($attestationEtudiant->getGroupes() as $groupe) {
            foreach ($groupe->getEtudiants() as $etudiant) {
                if ($etudiant->getId() === $this->getConnectedUser()->getId()) {
                    $autorise = true;
                }
            }
        }

        if ($autorise) {
            //exporter le PDF
            $myExportPresence->genereConvocationPdf($attestationEtudiant, $this->getConnectedUser());

            return new Response();
        }

        return $this->redirectToRoute('erreur_666');
    }
}