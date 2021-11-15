<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Section/PrevisionnelSectionAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 11:34
 */

namespace App\Components\Questionnaire\Section;

use App\Classes\Matieres\TypeMatiereManager;
use App\DTO\Previsionnel;
use App\Repository\PrevisionnelRepository;

class PrevisionnelSectionAdapter extends AbstractSectionAdapter
{
    public const ENTITY = Previsionnel::class;
    public const FIELD_LIBELLE = 'libelle';
    public const FIELD_PERSONNEL = 'libelle';
    public const FIELD_CODE = 'codeMatiere';
    public const LABEL = 'previsionnel';

    protected PrevisionnelRepository $previsionnelRepository;
    protected TypeMatiereManager $typeMatiereManager;

    public function __construct(PrevisionnelRepository $previsionnelRepository, TypeMatiereManager $typeMatiereManager)
    {
        $this->previsionnelRepository = $previsionnelRepository;
        $this->typeMatiereManager = $typeMatiereManager;
    }

    public function getData(mixed $id): ?array
    {
        $previ = $this->previsionnelRepository->find($id);
        if (null !== $previ) {
            $matiere = $this->typeMatiereManager->getMatiere($previ->getIdMatiere(), $previ->getTypeMatiere());
            if (null !== $matiere) {
                return [
                    'libelle' => $matiere->libelle,
                    'code' => $matiere->codeMatiere,
                    'personnel' => $previ->getPersonnel()?->getDisplayPr(),
                    'id' => $id,
                ];
            }
        }

        return null;
    }
}