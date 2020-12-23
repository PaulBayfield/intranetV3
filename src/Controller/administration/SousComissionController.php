<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/SousComissionController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/12/2020 07:53

namespace App\Controller\administration;

use App\Classes\SousCommission\SousCommission;
use App\Classes\SousCommission\SousCommissionExport;
use App\Classes\SousCommission\SousCommissionSauvegarde;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Scolarite;
use App\Entity\ScolaritePromo;
use App\Entity\Semestre;
use App\Event\SousCommissionEvent;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

/**
 * Class SousComissionController
 * @package App\Controller\administration
 * @Route("/administration/sous-commission")
 */
class SousComissionController extends BaseController
{
    /**
     * @Route("/live/{semestre}", name="administration_sous_commission_live")
     * @param SousCommission $sousCommission
     * @param Semestre       $semestre
     *
     * @return Response
     */
    public function live(SousCommission $sousCommission, Semestre $semestre): Response
    {
        $sousCommission->calcul($semestre, $this->dataUserSession->getAnneeUniversitaire());

        return $this->render('administration/sous_commission/live.html.twig', [
            'semestre'       => $semestre,
            'sousCommission' => $sousCommission
        ]);
    }

    /**
     * @Route("/travail/{semestre}", name="administration_sous_commission_travail")
     * @param SousCommission $sousCommission
     * @param SousCommissionSauvegarde $sousCommissionSauvegarde
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function travail(
        SousCommission $sousCommission,
        SousCommissionSauvegarde $sousCommissionSauvegarde,
        Semestre $semestre
    ): Response {
        $sousCommission->calcul($semestre, $this->dataUserSession->getAnneeUniversitaire());
        $sousCommissionTravail = $sousCommissionSauvegarde->sauvegardeTravail($sousCommission);

        return $this->render('administration/sous_commission/travail.html.twig', [
            'semestre' => $semestre,
            'sc'       => $sousCommissionTravail
        ]);
    }

    /**
     * @Route("/purger/{semestre}", name="administration_sous_commission_purger")
     * @param SousCommission $sousCommission
     * @param Semestre       $semestre
     *
     * @return Response
     */
    public function purger(SousCommission $sousCommission, Semestre $semestre): Response
    {

        return $this->redirectToRoute('administration_sous_commission_travail', ['semestre' => $semestre->getId()]);
    }

    /**
     * @Route("/recalculer/{ssComm}", name="administration_sous_commission_recalculer")
     * @param SousCommissionSauvegarde $sousCommissionSauvegarde
     * @param ScolaritePromo           $ssComm
     *
     * @return Response
     */
    public function recalculer(SousCommissionSauvegarde $sousCommissionSauvegarde, ScolaritePromo $ssComm): Response
    {
        $semestre = $ssComm->getSemestre();
        $sousCommissionSauvegarde->efface($ssComm);
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'scolarite.efface.et.recalculee.success.flash');

        return $this->redirectToRoute('administration_sous_commission_travail', ['semestre' => $semestre->getId()]);
    }

    /**
     * @Route("/publier/{ssComm}", name="administration_sous_commission_publier")
     * @param EventDispatcherInterface $eventDispatcher
     * @param SousCommissionSauvegarde $sousCommissionSauvegarde
     * @param ScolaritePromo           $ssComm
     *
     * @return Response
     */
    public function publier(
        EventDispatcherInterface $eventDispatcher,
        SousCommissionSauvegarde $sousCommissionSauvegarde,
        ScolaritePromo $ssComm
    ): Response {
        $semestre = $ssComm->getSemestre();
        $sousCommissionSauvegarde->visibilite($ssComm, true);
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'scolarite.publiee.success.flash');

        $publication = new SousCommissionEvent($ssComm);
        $eventDispatcher->dispatch($publication);

        return $this->redirectToRoute('administration_sous_commission_travail', ['semestre' => $semestre->getId()]);
    }

    /**
     * @Route("/depublier/{ssComm}", name="administration_sous_commission_depublier")
     * @param SousCommissionSauvegarde $sousCommissionSauvegarde
     * @param ScolaritePromo           $ssComm
     *
     * @return Response
     */
    public function depublier(
        SousCommissionSauvegarde $sousCommissionSauvegarde,
        ScolaritePromo $ssComm
    ): Response {
        $semestre = $ssComm->getSemestre();
        $sousCommissionSauvegarde->visibilite($ssComm, false);
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'scolarite.depubliee.success.flash');


        return $this->redirectToRoute('administration_sous_commission_travail', ['semestre' => $semestre->getId()]);
    }

    /**
     * @Route("/exporter/{semestre}", name="administration_sous_commission_exporter")
     * @param SousCommissionExport $sousCommission
     * @param Semestre             $semestre
     *
     * @return Response
     * @throws Exception
     */
    public function exporter(SousCommissionExport $sousCommission, Semestre $semestre): Response
    {
        return $sousCommission->export($semestre, $this->dataUserSession->getAnneeUniversitaire());
    }

    /**
     * @Route("/grand-jury/{ssComm}", name="administration_sous_commission_exporter_grand_jury")
     * @param SousCommission $sousCommission
     * @param Semestre       $semestre
     *
     * @return Response
     */
    public function grandJury(SousCommission $sousCommission, Semestre $semestre): Response
    {

    }

    /**
     * @Route("/apogee/{ssComm}", name="administration_sous_commission_exporter_apogee")
     * @param SousCommission $sousCommission
     * @param Semestre       $semestre
     *
     * @return Response
     */
    public function apogee(SousCommission $sousCommission, Semestre $semestre): Response
    {

    }

    /**
     * @Route("/ajax/semestre/{id}/{type}", name="administration_ss_comm_ajax_edit", options={"expose"=true})
     * @param SousCommission $sousCommission
     * @param Request        $request
     * @param Scolarite      $scolarite
     * @param                $type
     *
     * @return JsonResponse
     */
    public function ajaxEditSsComm(
        SousCommission $sousCommission,
        Request $request,
        Scolarite $scolarite,
        $type
    ): JsonResponse {
        $sousCommission->updateScolarite($scolarite,
            $type,
            $request->request->get('field'),
            $request->request->get('value'));

        return $this->json(true);
    }
}
