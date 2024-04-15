import { chromium } from "playwright";
import { getRandomUserAgent } from "./utils";

export const setup = async () => {
	const browser = await chromium.launch({ headless: false });
	const context = await browser.newContext({
		// different user agents have different results 
		// userAgent: getRandomUserAgent()
	});

	const page = await context.newPage();

	return { page, browser, context };
}; 