<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Exporter/SourceIterator/DoctrineSourceIterator.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/05/2021 20:35
 */

namespace App\Classes\Exporter\SourceIterator;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\PropertyInfo\DoctrineExtractor;
use Symfony\Component\PropertyInfo\PropertyInfoExtractor;

class DoctrineSourceIterator implements SourceInterface
{
    private const DATE_PARTS = [
        'y' => 'Y',
        'm' => 'M',
        'd' => 'D',
    ];
    private const TIME_PARTS = [
        'h' => 'H',
        'i' => 'M',
        's' => 'S',
    ];

    protected array $fields = [];
    protected array $datas = [];
    private $dateFormat = 'd/m/Y';
    private $timeFormat = 'H:i';

    private PropertyInfoExtractor $propertyInfo;
    private string $classType;

    public function __construct($datas, EntityManagerInterface $entityManager, string $fqcn)
    {
        $this->classType = $fqcn;
        $doctrineExtractor = new DoctrineExtractor($entityManager);
        $listExtractors = [$doctrineExtractor];
        $typeExtractors = [$doctrineExtractor];
        $this->propertyInfo = new PropertyInfoExtractor($listExtractors, $typeExtractors);
        $properties = $this->propertyInfo->getProperties($this->classType);
        $this->getHeader($properties);

        foreach ($datas as $data) {
            $this->prepareDatas($data);
        }
    }

    private function getHeader($datas)
    {
        foreach ($datas as $key => $data) {
            $this->fields[$data] = $this->propertyInfo->getTypes($this->classType, $datas[$key]);
        }
    }

    private function prepareDatas(mixed $data)
    {
        $d = [];
        foreach ($data as $key => $value) {
            $d[$key] = $this->getValue($value);
        }
        $this->datas[] = $d;
    }

    private function getValue(mixed $value): ?string
    {
        switch (true) {
            case \is_array($value):
                return '[' . implode(', ', array_map([$this, 'getValue'], $value)) . ']';
            case $value instanceof \Traversable:
                return '[' . implode(', ', array_map([$this, 'getValue'], iterator_to_array($value))) . ']';
            case $value instanceof \DateTimeInterface:
                if ('01/01/1970' === $value->format($this->dateFormat) || '00/00/0000' === $value->format($this->dateFormat)) {
                    return $value->format($this->timeFormat);
                }

                return $value->format($this->dateFormat . ' ' . $this->timeFormat);
            case $value instanceof \DateInterval:
                return $this->getDuration($value);
            case \is_object($value):
                return method_exists($value, '__toString') ? (string)$value : null;
            case is_bool($value):
                return true === $value ? 'Oui' : 'Non';
            default:
                return $value;
        }
    }

    public function getDuration(\DateInterval $interval): string
    {
        $datePart = '';
        foreach (self::DATE_PARTS as $datePartAttribute => $datePartAttributeString) {
            if ($interval->$datePartAttribute !== 0) {
                $datePart .= $interval->$datePartAttribute . $datePartAttributeString;
            }
        }

        $timePart = '';
        foreach (self::TIME_PARTS as $timePartAttribute => $timePartAttributeString) {
            if ($interval->$timePartAttribute !== 0) {
                $timePart .= $interval->$timePartAttribute . $timePartAttributeString;
            }
        }

        if ('' === $datePart && '' === $timePart) {
            return 'P0Y';
        }

        return 'P' . $datePart . ('' !== $timePart ? 'T' . $timePart : '');
    }

    public function toArray(): array
    {
        return [
            'fields' => $this->fields,
            'datas' => $this->datas,
        ];
    }

    public function getFields(): array
    {
        return $this->fields;
    }

    public function getDatas(): array
    {
        return $this->datas;
    }
}