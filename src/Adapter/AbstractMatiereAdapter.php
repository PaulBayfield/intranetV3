<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Adapter/AbstractMatiereAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 15/05/2021 09:15
 */

namespace App\Adapter;

use App\DTO\Matiere;

abstract class AbstractMatiereAdapter
{
    /**
     * @param \App\Entity\Matiere|\App\Entity\ApcRessource|\App\Entity\ApcSae $matiere
     */
    public function single($matiere): ?Matiere
    {
        if (null === $matiere) {
            return null;
        }

        $m = new Matiere();
        $m->id = $matiere->getId();
        $m->typeMatiere = $matiere::SOURCE;
        $m->libelle = $matiere->getLibelle();
        $m->display = $matiere->getDisplay();
        $m->codeMatiere = $matiere->getCodeMatiere();
        $m->codeElement = $matiere->getCodeElement();

        $m->cmPpn = $matiere->getCmPpn();
        $m->tdPpn = $matiere->getTdPpn();
        $m->tpPpn = $matiere->getTpPpn();

        $m->nbNotes = $matiere->getNbNotes();
        $m->coefficient = $matiere->getCoefficient();

        $m->cmFormation = $matiere->getCmFormation();
        $m->tdFormation = $matiere->getTdFormation();
        $m->tpFormation = $matiere->getTpFormation();
        $m->suspendu = $matiere->isSuspendu();

        return $m;
    }
}