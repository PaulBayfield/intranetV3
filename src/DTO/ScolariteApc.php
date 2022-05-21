<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/DTO/ScolariteApc.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/05/2022 10:11
 */

namespace App\DTO;

class ScolariteApc
{
    public ?string $decision;
    public array $moyenneUes = [];

    public function __construct(\App\Entity\Scolarite $scolarite, array $ues = [])
    {
        $this->decision = $scolarite->getDecision();

        foreach ($scolarite->getMoyennesUes() as $key => $moyenneUe) {
            $this->moyenneUes[$ues[$key]->getNumeroUe()] = $scolarite->getMoyennesUes()[$key];
        }
    }
}
