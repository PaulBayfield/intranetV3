<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/SourceEdt/DependencyInjection/services.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/09/2022 18:52
 */

namespace App\Components\Questionnaire\DependencyInjection;

use App\Components\Questionnaire\Section\ConfigurableSection;
use App\Components\Questionnaire\Section\EndSection;
use App\Components\Questionnaire\Section\MatiereSectionAdapter;
use App\Components\Questionnaire\Section\PrevisionnelSectionAdapter;
use App\Components\Questionnaire\Section\RessourceSectionAdapter;
use App\Components\Questionnaire\Section\SaeSectionAdapter;
use App\Components\Questionnaire\Section\Section;
use App\Components\Questionnaire\Section\StartSection;
use App\Components\Questionnaire\TypeQuestion\TypeChainee;
use App\Components\Questionnaire\TypeQuestion\TypeEchelle;
use App\Components\Questionnaire\TypeQuestion\TypeLibre;
use App\Components\Questionnaire\TypeQuestion\TypeOuiNon;
use App\Components\Questionnaire\TypeQuestion\TypeQcm;
use App\Components\Questionnaire\TypeQuestion\TypeQcu;
use App\Components\Questionnaire\TypeQuestion\TypeSlider;
use App\Components\SourceEdt\Adapter\EdtCelcatAdapter;
use App\Components\SourceEdt\Adapter\EdtIntranetAdapter;
use App\Components\SourceEdt\Source\EdtAde;
use App\Components\SourceEdt\Source\EdtCelcat;
use App\Components\SourceEdt\Source\EdtIntranet;
use App\Components\SourceEdt\SourceEdtRegistry;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function (ContainerConfigurator $configurator): void {
    $services = $configurator->services();
    $services->defaults()
        ->private()
        ->autowire()
        ->autoconfigure(false);

    $services->set(EdtIntranet::class)->tag(SourceEdtRegistry::TAG_SOURCE_EDT);
    $services->set(EdtCelcat::class)->tag(SourceEdtRegistry::TAG_SOURCE_EDT);
    $services->set(EdtAde::class)->tag(SourceEdtRegistry::TAG_SOURCE_EDT);
};
