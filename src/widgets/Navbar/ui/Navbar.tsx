import React from 'react';
import {classNames} from "shared/lib/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>Main</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About</AppLink>
			</div>
		</div>
	);
};
