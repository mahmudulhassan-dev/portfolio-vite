import { test, expect } from '@playwright/test';

test.describe('Contact Form Features', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#contact');
  });

  test('should validate required fields', async ({ page }) => {
    const submitBtn = page.getByRole('button', { name: /Submit Secure/i });
    await submitBtn.click();
    
    // Check for native validation state
    const nameValidity = await page.$eval('input[name="name"]', (el: HTMLInputElement) => el.validity.valid);
    expect(nameValidity).toBe(false);
  });

  test('should allow service selection and budget adjustment', async ({ page }) => {
    const aiService = page.getByRole('button', { name: /AI Automation/i, exact: true });
    await aiService.click();
    await expect(aiService).toHaveClass(/bg-cyan/);
    
    const slider = page.locator('input[type="range"]');
    await slider.fill('15000');
    // regex matching for dynamic price
    await expect(page.getByText(/\$15,000/)).toBeVisible();
  });

  test('should handle a successful submission mock', async ({ page }) => {
    await page.route('**/api/chat', route => {
      return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ success: true }) });
    });
    
    await page.getByPlaceholder(/John Doe/i).fill('E2E Tester');
    await page.getByPlaceholder(/john@enterprise.com/i).fill('e2e@test.com');
    await page.getByPlaceholder(/Describe your vision/i).fill('This is a test brief for Playwright E2E simulation.');
    
    const submitBtn = page.getByRole('button', { name: /Submit Secure/i });
    await submitBtn.click();
    
    await expect(page.getByText(/Project Brief Received/i)).toBeVisible({ timeout: 15000 });
  });
});
