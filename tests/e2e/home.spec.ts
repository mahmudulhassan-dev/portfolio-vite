import { test, expect } from '@playwright/test';

test.describe('Portfolio Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display correctly with hero section', async ({ page }) => {
    // Check branding
    await expect(page).toHaveTitle(/Mahmudul Hassan/);
    // Use regex to handle nested spans and line breaks
    await expect(page.getByRole('heading', { name: /I Build Intelligent/i })).toBeVisible();
    
    // Check main CTAs
    const viewWorkCta = page.locator('#hero-cta-work');
    const collaborateCta = page.locator('#hero-cta-contact');
    
    await expect(viewWorkCta).toBeVisible();
    await expect(collaborateCta).toBeVisible();
  });

  test('navigation should work and update active state', async ({ page }) => {
    // Scroll to solutions
    const servicesLink = page.locator('nav').getByRole('link', { name: /Solutions/i });
    await servicesLink.click();
    
    // Wait for scroll behavior
    await page.waitForURL(/.*#services/);
    await expect(page.locator('#services')).toBeInViewport({ timeout: 15000 });
    
    // Check if it becomes active (regex for class)
    await expect(servicesLink).toHaveClass(/text-cyan/i, { timeout: 15000 });
  });

  test('should have a functional mobile menu toggle', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    
    // Use a slightly longer wait for the layout to settle after resize
    await page.waitForTimeout(500); 

    const menuBtn = page.getByLabel(/toggle menu/i);
    await expect(menuBtn).toBeVisible({ timeout: 10000 });
    
    await menuBtn.click();
    
    // Check for menu item that should ONLY be visible now
    const expertiseLink = page.getByRole('link', { name: /Expertise/i }).filter({ visible: true });
    await expect(expertiseLink).toBeVisible({ timeout: 10000 });
  });
});
