import { test, expect } from '@playwright/test';

test.describe('AI Chat Widget Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should open and close the chat widget', async ({ page }) => {
    const chatToggle = page.getByLabel(/chat with ai/i);
    await chatToggle.click({ force: true });
    
    await expect(page.getByText(/Live Agent/i)).toBeVisible();
    
    // Close the chat
    const closeBtn = page.getByLabel(/close chat/i).first(); 
    await closeBtn.click();
    await expect(page.getByText(/Live Agent/i)).not.toBeVisible();
  });

  test('should handle message exchange with mock Gemini 2.5 Pro response', async ({ page }) => {
    // Reveal chat
    await page.getByLabel(/chat with ai/i).click({ force: true });
    
    // Mock the backend API
    await page.route('**/api/chat', route => {
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ reply: 'E2E Test: I am online using Gemini 2.5 Pro architecture.' })
      });
    });
    
    const chatInput = page.getByPlaceholder(/Ask anything about/i);
    await chatInput.fill('Are you online?');
    await chatInput.press('Enter');
    
    // Check if user message is visible
    await expect(page.getByText('Are you online?')).toBeVisible();
    
    // Check for thinking state or the reply
    const assistantIsThinking = page.getByText(/Assistant is thinking/i);
    // It might be too fast to see on local, but we check if the response arrives
    await expect(page.getByText(/E2E Test: I am online/i)).toBeVisible({ timeout: 15000 });
  });
});
