import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {RuleSetRule} from "webpack";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
	const { isDev } = options
	
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	}
	
	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resPath: string) => resPath.includes('.module.'),
						localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
					}
				}
			},
			"sass-loader"
		]
	}
	
	return [
		typescriptLoader,
		cssLoader
	]
}