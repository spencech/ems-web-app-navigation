export interface INavigationState {
	id: string,
	label: string,
	state: any,
	page: any,
	instance: any,
	callback: (state: INavigationState) => void
}