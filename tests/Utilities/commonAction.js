/**
 * Common action helpers for Playwright steps.
 * Exports: click, clear, fill
 */
import { expect } from '@playwright/test';

class CommonAction {
	constructor(page) {
		this.page = page;
	}

	async click(selector) {
		await selector.waitFor({ state: 'visible' });
		await selector.click();
	}

	async clearandfill(selector, value) {
		
		await selector.waitFor({ state: 'visible' });
		await selector.click();
	}

	async clearandfill(selector, value) {
		await selector.waitFor({ state: 'visible' });
        await selector.fill(''); // Clear the field
		await selector.fill(value);
	}

	async expectUrlContains(substring) {
		expect(this.page.url()).toContain(substring);
	}
}

export default CommonAction;

