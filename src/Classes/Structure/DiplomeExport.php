<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Structure/DiplomeExport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/05/2021 11:08
 */

namespace App\Classes\Structure;

use App\Entity\Diplome;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class DiplomeExport
{
    private Environment $twig;

    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    public function exportRefentiel(Diplome $diplome): Response
    {
        if (true === $diplome->getTypeDiplome()->getApc()) {
            $xmlContent = $this->twig->render('xml/export-referentiel-but.xml.twig', [
                'diplome' => $diplome,
                'competences' => $diplome->getApcComptences(),
                'parcours' => $diplome->getApcParcours()
            ]);
            $name = 'but-' . $diplome->getSigle();
        } else {
            $xmlContent = $this->twig->render('xml/export-referentiel.xml.twig', [
            ]);
            $name = 'structure-' . $diplome->getSigle();
        }

        return $this->exportFichier($xmlContent, $name);
    }

    public function exportFichier(string $xmlContent, string $name): Response
    {
        $response = new Response($xmlContent);
        $response->headers->set('Content-type', 'text/xml');
        $response->headers->set('Content-Disposition', 'attachment;filename="' . $name . '.xml"');

        return $response;
    }

    public function exportProgramme(Diplome $diplome): Response
    {
        if (true === $diplome->getTypeDiplome()->getApc()) {
            $xmlContent = $this->twig->render('xml/export-programme-but.xml.twig', [
                'semestres' => $diplome->getSemestres()
            ]);
            $name = 'but-pn-' . $diplome->getSigle();
        } else {
            $xmlContent = $this->twig->render('xml/export-programme.xml.twig', [
            ]);
            $name = 'ppn-' . $diplome->getSigle();
        }

        return $this->exportFichier($xmlContent, $name);
    }
}