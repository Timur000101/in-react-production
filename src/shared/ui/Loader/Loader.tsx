import './Loader.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface LoaderProps {
	className?: string
}

export const Loader = ({ className }: LoaderProps) => (
	<div className={classNames('lds-spinner', {}, [className])}>
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
	</div>
);
