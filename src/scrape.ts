import { randomDelay } from './utils';
import { setup } from './setup';

export async function scrape(query: string): Promise<void> {
	const { page, browser } = await setup();

	try {
		// open page
		await page.goto('https://www.amazon.com', { timeout: 60000 });
		await randomDelay(3000, 5000);

		// find search input
		const searchInput = await page.locator("#twotabsearchtextbox").first();
		const searchButtonSubmit = await page.locator("#nav-search-submit-text").first();

		// fill the query
		await searchInput.fill(query);
		await randomDelay(1000, 2500);

		// press submit button
		await searchButtonSubmit.click();
		await randomDelay(1000, 2500);

		// click on sotrer opener
		const sorter = await page.locator(".a-dropdown-label").first().getByText("Sort by:").first();
		await sorter.click();
		await randomDelay(2000, 3500);

		// find "Best Sellers" label and press to sort the data
		const itemsWrapper = await page.locator("#a-popover-2").first();
		const bestLabel = await itemsWrapper.getByText("Best Sellers").first();
		await bestLabel.click();
		await randomDelay(4000, 5500);

		// find desired book
		const results = await page.locator(".s-search-results").first();
		const bookTitle = await results.locator("h2 a").first();
		await bookTitle.click();
		await randomDelay(6000, 8500);

		// find reviews
		const reviewsWrapper = await page.locator(".reviews-content").first();
		const reviewsList = await reviewsWrapper.locator(".review-data").allInnerTexts();

		// result
		console.log("reviewsList", reviewsList);
	} catch (error) {
	} finally {
		await browser.close();
	}

}
