// Чтобы TS не ругался на импорт стилей через [import ... from ...]
declare module "*.scss" {
	interface IClassNames {
		[className: string]: string
	}
	
	const classNames: IClassNames
	
	export = classNames
}