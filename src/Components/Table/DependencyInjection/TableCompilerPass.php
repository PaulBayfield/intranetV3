<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/DependencyInjection/TableCompilerPass.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 10:04
 */

namespace App\Components\Table\DependencyInjection;

use App\Components\Table\TableRegistry;
use App\Components\Table\TableType;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;
use Symfony\Component\DependencyInjection\Reference;

class TableCompilerPass implements CompilerPassInterface
{
    /**
     * You can modify the container here before it is dumped to PHP code.
     */
    public function process(ContainerBuilder $container)
    {
        $registry = $container->getDefinition(TableRegistry::class);
        $this->addToRegistry($container, $registry, TableRegistry::TAG_ADAPTER, 'registerAdapter');
        $this->addToRegistry($container, $registry, TableRegistry::TAG_COLUMN_TYPE, 'registerColumnType');
        $this->addToRegistry($container, $registry, TableRegistry::TAG_TABLE_TYPE, 'registerType');

    }

    private function addToRegistry(ContainerBuilder $container, Definition $registry, string $tag, string $method)
    {
        $taggedServices = $container->findTaggedServiceIds($tag);

        foreach ($taggedServices as $id => $tags) {
            $registry->addMethodCall($method, [$id, new Reference($id)]);
        }
    }
}
