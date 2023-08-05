export interface INavigationState {
	id: string,
	label: string,
	state: any,
	page: Page,
	instance: any,
	callback: (state: INavigationState) => void
}