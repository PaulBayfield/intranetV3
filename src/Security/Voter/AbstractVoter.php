<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Security/Voter/AbstractVoter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/10/2021 13:20
 */

namespace App\Security\Voter;

use App\Entity\Departement;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Core\User\UserInterface;

class AbstractVoter
{
    public const MINIMAL_ROLE_ABS = 'MINIMAL_ROLE_ABS';
    public const MINIMAL_ROLE_NOTE = 'MINIMAL_ROLE_NOTE';
    public const MINIMAL_ROLE_ASS = 'MINIMAL_ROLE_ASS';
    public const MINIMAL_ROLE_RP = 'MINIMAL_ROLE_RP';
    public const MINIMAL_ROLE_DDE = 'MINIMAL_ROLE_DDE';
    public const MINIMAL_ROLE_STAGE = 'MINIMAL_ROLE_STAGE';
    public const MINIMAL_ROLE_PROJET = 'MINIMAL_ROLE_PROJET';
    public const MINIMAL_ROLE_CDD = 'MINIMAL_ROLE_CDD';
    public const MINIMAL_ROLE_EDT = 'MINIMAL_ROLE_EDT';
    public const MINIMAL_ROLE_SCOL = 'MINIMAL_ROLE_SCOL';

    public const LIST_OF_MINIMAL_ROLES = [
        self::MINIMAL_ROLE_ABS,
        self::MINIMAL_ROLE_NOTE,
        self::MINIMAL_ROLE_ASS,
        self::MINIMAL_ROLE_RP,
        self::MINIMAL_ROLE_DDE,
        self::MINIMAL_ROLE_STAGE,
        self::MINIMAL_ROLE_PROJET,
        self::MINIMAL_ROLE_EDT,
        self::MINIMAL_ROLE_CDD,
        self::MINIMAL_ROLE_SCOL,
    ];

    public const HIERARCHICAL_ACCESS_FROM_ROLE = [
        self::MINIMAL_ROLE_ABS => ['ROLE_ABS', 'ROLE_ASS', 'ROLE_DDE', 'ROLE_RP', 'ROLE_CDD'],
        self::MINIMAL_ROLE_SCOL => ['ROLE_NOTE', 'ROLE_ABS', 'ROLE_ASS', 'ROLE_DDE', 'ROLE_RP', 'ROLE_CDD'],
        self::MINIMAL_ROLE_NOTE => ['ROLE_NOTE', 'ROLE_ASS', 'ROLE_DDE', 'ROLE_RP', 'ROLE_CDD'],
        self::MINIMAL_ROLE_ASS => ['ROLE_ASS', 'ROLE_DDE', 'ROLE_RP', 'ROLE_CDD'],
        self::MINIMAL_ROLE_RP => ['ROLE_RP', 'ROLE_CDD'],
        self::MINIMAL_ROLE_DDE => ['ROLE_DDE', 'ROLE_CDD'],
        self::MINIMAL_ROLE_STAGE => ['ROLE_STAGE', 'ROLE_ASS', 'ROLE_DDE', 'ROLE_RP', 'ROLE_CDD'],
        self::MINIMAL_ROLE_PROJET => ['ROLE_PROJET', 'ROLE_ASS', 'ROLE_DDE', 'ROLE_RP', 'ROLE_CDD'],
        self::MINIMAL_ROLE_EDT => ['ROLE_EDT', 'ROLE_ASS', 'ROLE_DDE', 'ROLE_RP', 'ROLE_CDD'],
        self::MINIMAL_ROLE_CDD => ['ROLE_CDD'],
    ];

    protected ?SessionInterface $session;
    protected UserInterface|string $user;
    protected array $departementRoles;

    public function __construct(SessionInterface $session, TokenStorageInterface $tokenStorage)
    {
        $this->session = $session;
        $this->user = $tokenStorage->getToken()->getUser();
        if (! is_string($this->user)) {
            $this->departementRoles = [];
            foreach ($this->user->getPersonnelDepartements() as $rf) {
                if (!array_key_exists($rf->getDepartement()->getId(), $this->departementRoles)) {
                    $this->departementRoles[$rf->getDepartement()->getId()] = [];
                }
                if (null !== $rf->getDepartement()) {
                    $this->departementRoles[$rf->getDepartement()->getId()][] = $rf->getRoles()[0];
                }
            }
        }
    }

    public function userHasMinimalRoleInDepartement(string $attribute, ?Departement $departement)
    {
        if ($departement !== null && $this->userInGoodDepartement($departement)) {
            if (!array_key_exists($departement->getId(), $this->departementRoles)) {
                throw new AccessDeniedException('Vous n\'avez pas accès à ce département');
            }

            return count(array_intersect(self::HIERARCHICAL_ACCESS_FROM_ROLE[$attribute],
                    $this->departementRoles[$departement->getId()])) > 0;
        }

        throw new AccessDeniedException('Vous n\'êtes pas dans le bon département');
    }

    public function userInGoodDepartement(?Departement $departement): bool
    {
        if (null === $departement) {
            return false;
        }

        if (null === $this->session->get('departement')) {
            return false;
        }

        if (is_string($this->session->get('departement'))) {
            return $this->session->get('departement') === $departement->getUuidString();
        }

        return $this->session->get('departement')->equals($departement->getUuid());
    }
}
