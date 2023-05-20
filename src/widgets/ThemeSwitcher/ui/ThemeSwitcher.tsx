import {Theme, useTheme} from "app/providers/ThemeProvider";
import {FC} from "react";
import DarkIcon from 'shared/assets/icons/dark-theme.svg'
import LightIcon from 'shared/assets/icons/light-theme.svg'
import { classNames } from "shared/lib/classNames";
import { Button, ThemeButton } from "shared/ui/Button";
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
	const { className } = props
	const { theme, toggleTheme } = useTheme()
	
	return (
		<Button theme={ThemeButton.CLEAR} className={classNames(cls.themeSwitcher, {}, [className])} onClick={toggleTheme}>
			{ theme === Theme.DARK ? <LightIcon /> : <DarkIcon /> }
			</Button>
	);
};
