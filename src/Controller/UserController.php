<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/UserController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/09/2024 20:08
 */

namespace App\Controller;

use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Form\EtudiantProfilType;
use App\Form\PersonnelProfilType;
use App\Repository\EtudiantRepository;
use App\Repository\PersonnelRepository;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class UserController.
 */
#[Route(path: '/utilisateur')]
class UserController extends BaseController
{
    #[Route(path: '/mon-profil/{onglet}', name: 'user_mon_profil')]
    public function monProfil(string $onglet = 'scolarite'): Response
    {
        return $this->render('user/profil.html.twig', [
            'user' => $this->getUser(),
            'onglet' => $onglet,
            'monprofil' => true,
            'siteperso' => $this->getUser() instanceof Etudiant ? $this->getUser()->getSemestre()?->getDiplome()?->getOptEspacePersoVisible() : false,
        ]);
    }

    #[Route(path: '/liste-departement', name: 'user_get_departements', options: ['expose' => true])]
    public function listeDepartements(): Response
    {
        //todo: utilisé ou?
        $departements = $this->getUser()->getPersonnelDepartements();

        $departementsArray = [];
        foreach ($departements as $departement) {
            $t['defaut'] = $departement->getDefaut();
            $d = $departement->getDepartement();
            $t['uuid'] = $d->getUuidString();
            $t['couleur'] = $d->getCouleur();
            $t['libelleInitiales'] = $d->libelleInitiales();
            $departementsArray[] = $t;
        }

        return $this->json($departementsArray);

//        return $this->render('tool_bar/_liste_departements.html.twig', [
//            'departements' => $departements,
//        ]);
    }

    /**
     * @throws NonUniqueResultException
     */
    #[Route(path: '/{type}/{slug}/{onglet}', name: 'user_profil', options: ['expose' => true])]
    public function index(EtudiantRepository $etudiantRepository, PersonnelRepository $personnelRepository, string $type, string $slug, string $onglet = 'scolarite'): RedirectResponse|Response
    {
        if ('personnel' === $type) {
            $user = $personnelRepository->findOneBySlug($slug);
            if (null !== $user) {
                return $this->render('user/profil.html.twig', [
                    'user' => $user,
                    'onglet' => $onglet,
                    'monprofil' => false,
                ]);
            }
        }
        if ('etudiant' === $type) {
            $user = $etudiantRepository->findOneBySlug($slug);
            if (null !== $user) {
                return $this->render('user/profil.html.twig', [
                    'user' => $user,
                    'onglet' => $onglet,
                    'monprofil' => false,
                    'siteperso' => $user->getSemestre()?->getDiplome()?->getOptEspacePersoVisible(),
                ]);
            }
        }

        return $this->redirectToRoute('erreur_404');
    }

    #[Route(path: '/settings', name: 'user_settings')]
    public function settings(Request $request): Response
    {
        $user = $this->getUser();
        $type = null;
        if ($user instanceof Personnel) {
            $type = 'personnel';
            $form = $this->createForm(
                PersonnelProfilType::class,
                $user,
                [
                    'locale' => $request->getLocale(),
                    'attr' => [
                        'data-provide' => 'validation',
                    ],
                ]
            );
            $form->handleRequest($request);
            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'donnees.update.success.flash');
            }
        } elseif ($user instanceof Etudiant) {
            $type = 'etudiant';
            $form = $this->createForm(EtudiantProfilType::class, $user, [
                'attr' => ['data-provide' => 'validation'],
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'donnees.update.success.flash');
            }
        } else {
            return $this->redirectToRoute('erreur_404');
        }

        return $this->render('user/settings.html.twig', [
            'form' => $form,
            'user' => $user,
            'type' => $type,
        ]);
    }
}
