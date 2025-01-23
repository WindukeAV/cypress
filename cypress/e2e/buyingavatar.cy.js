// npx cypress run --spec cypress/e2e/buyingavatar.cy.js --browser chrome
import * as data from '../helpers/default_data.json';
import * as poke_auth from '../locators/poke.auth.json';
import * as poke_main_page from '../locators/poke.main_page.json';
import * as poke_purchase_page from '../locators/poke_purchase_menu.json';
import * as poke_purchase_confirm_page from '../locators/poke_purchase_confirm.json';
import * as poke_success_page from '../locators/poke.success_page.json';

describe('Покупка нового аватара', function () {
	it('Покупка нового аватара', function () {
		cy.visit(poke_auth.url);
		// AUTH
		cy.get(poke_auth.login).type(data.login);
		cy.get(poke_auth.password).type(data.password);
		cy.get(poke_auth.auth_button).click();
		// FOUND AVATAR
		cy.get(poke_main_page.trainer_menu).click();
		cy.get(poke_main_page.change_avatar_button).click();
		cy.get(poke_main_page.avatar_card).first().click();
		// PURCHASE MENU
		cy.get(poke_purchase_page.card_number).type(data.card_number);
		cy.get(poke_purchase_page.card_actual).type(data.card_actual);
		cy.get(poke_purchase_page.card_cvv).type(data.card_cvv);
		cy.get(poke_purchase_page.card_name).type(data.card_name);
		cy.get(poke_purchase_page.pay_button).click();
		// PURCHASE CONFIRMATION
		cy.get(poke_purchase_confirm_page.secure_code).type(data.secure_code);
		cy.get(poke_purchase_confirm_page.submit_button).click();
		cy.wait(4000);
		// BACK TO MAIN MENU
		cy.get(poke_success_page.back_main_page_button).click();
		// LOG OUT TO MAIN STATE'
		cy.get(poke_main_page.logout_button).click();
	});
});
