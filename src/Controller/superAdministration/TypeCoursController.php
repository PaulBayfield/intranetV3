<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/TypeHrsController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 17:48
 */

namespace App\Controller\superAdministration;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\TypeCours;
use App\Entity\TypeHrs;
use App\Form\TypeCoursType;
use App\Form\TypeHrsType;
use App\Repository\TypeCoursRepository;
use App\Repository\TypeHrsRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function count;

/**
 * @Route("/administratif/type-cours")
 */
class TypeCoursController extends BaseController
{
    /**
     * @Route("/", name="sa_type_cours_index", methods="GET")
     */
    public function index(TypeCoursRepository $typeCoursRepository): Response
    {
        return $this->render('super-administration/type_cours/index.html.twig',
            ['type_cours' => $typeCoursRepository->findAll()]);
    }

    /**
     * @Route("/export.{_format}", name="sa_type_cours_export", methods="GET", requirements={"_format"="csv|xlsx|pdf"})
     *
     */
    public function export(MyExport $myExport, TypeCoursRepository $typeCoursRepository, $_format): Response
    {
        $typeCours = $typeCoursRepository->findAll();

        return $myExport->genereFichierGenerique(
            $_format,
            $typeCours,
            'typeHrs',
            ['type_cours_administration'],
            ['libelle', 'type', 'incluService', 'maximum']
        );
    }

    /**
     * @Route("/new", name="sa_type_cours_new", methods="GET|POST")
     */
    public function create(Request $request): Response
    {
        $typeCours = new TypeCours();
        $form = $this->createForm(TypeCoursType::class, $typeCours, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($typeCours);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_cours.add.success.flash');

            return $this->redirectToRoute('sa_type_cours_index');
        }

        return $this->render('super-administration/type_cours/new.html.twig', [
            'type_cr' => $typeCours,
            'form'    => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_type_cours_show", methods="GET")
     */
    public function show(TypeCours $typeCours): Response
    {
        return $this->render('super-administration/type_cours/show.html.twig', ['type_cr' => $typeCours]);
    }

    /**
     * @Route("/{id}/edit", name="sa_type_cours_edit", methods="GET|POST")
     */
    public function edit(Request $request, TypeCours $typeCours): Response
    {
        $form = $this->createForm(TypeCoursType::class, $typeCours, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_cours.edit.success.flash');

            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('sa_type_cours_index');
            }

            return $this->redirectToRoute('sa_type_cours_edit', ['id' => $typeCours->getId()]);
        }

        return $this->render('super-administration/type_cours/edit.html.twig', [
            'type_cours' => $typeCours,
            'form'     => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="sa_type_cours_duplicate", methods="GET|POST")
     */
    public function duplicate(TypeCours $typeCours): Response
    {
        $newTypeHrs = clone $typeCours;

        $this->entityManager->persist($newTypeHrs);
        $this->entityManager->flush();

        return $this->redirectToRoute('sa_type_cours_edit', ['id' => $newTypeHrs->getId()]);
    }

    /**
     * @Route("/{id}", name="sa_type_cours_delete", methods="DELETE")
     */
    public function delete(Request $request, TypeCours $typeCours): Response
    {
        $id = $typeCours->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
//            if (0 === count($typeCours->getHrs())) {
//                $this->entityManager->remove($typeHrs);
//                $this->entityManager->flush();
//
//                return $this->json($id, Response::HTTP_OK);
//            }

            return $this->json('not_empty', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}