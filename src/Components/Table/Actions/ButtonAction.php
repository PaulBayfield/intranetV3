<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Actions/ButtonAction.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/08/2021 08:01
 */

namespace App\Components\Table\Actions;

use Symfony\Component\OptionsResolver\OptionsResolver;

class ButtonAction extends AbstractButtonAction implements ActionInterface
{
    public const CLASS_CSS = 'btn btn-outline-primary btn-square';
    public const DEFAULT_ICON = 'fas fa-wallet';
    public static int $nbBouton = 0;
    protected array $params = [];

    public function __construct(array $params = [])
    {
        parent::__construct($params);
        $resolver = new OptionsResolver();
        $this->configureOptions($resolver);

        $this->params = $resolver->resolve($params);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'class' => self::CLASS_CSS,
            'name' => 'default_bouton_' . self::$nbBouton,
            'icon' => self::DEFAULT_ICON,
            'url' => 'default_bouton_' . self::$nbBouton,
            'identifier' => 'id',
        ]);
        $resolver->setRequired('url');
    }
}