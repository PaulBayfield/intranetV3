<?php
/**
 * Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administratif/enquete/EnqueteController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 11/11/2019 12:10
 * @lastUpdate 10/11/2019 09:09
 */

namespace App\Controller\administratif\enquete;

use App\Repository\DiplomeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class EnqueteController extends AbstractController
{
    /**
     * @Route("/enquete", name="administratif_enquete_index")
     */
    public function index(DiplomeRepository $diplomeRepository)
    {
        return $this->render('administratif/enquete/index.html.twig', [
            'diplomes' => $diplomeRepository->findActifs()
        ]);
    }
}
