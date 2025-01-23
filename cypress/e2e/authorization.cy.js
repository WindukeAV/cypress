// npx cypress run --spec cypress/e2e/authorization.cy.js --browser chrome

import * as data from '../helpers/default_data.json';
import * as main_page from '../locators/main_page.json';
import * as password_recover_page from '../locators/password_recovery_page.json';
import * as result_page from '../locators/result_page.json';

describe('Авторизация', function () {
	beforeEach('Старт теста авторизации', function () {
		cy.visit('/');
	});

	afterEach('Конец теста авторизации', function () {
		cy.get(result_page.exit_icon).should('be.visible');
	});

	it('Проверка Верный пароль и верный логин', function () {
		cy.get(main_page.email).type(data.auth_login);
		cy.get(main_page.password).type(data.auth_password);
		cy.get(main_page.login_button).click();
		cy.contains('Авторизация прошла успешно').should('be.visible');
	});

	it('Проверка кнопки Восстановление пароля', function () {
		cy.get(main_page.forgot_email_button).click();
		cy.get(password_recover_page.forgot_email).type(data.auth_login);
		cy.get(password_recover_page.restor_email_button).click();
		cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
	});

	it('Проверка неверный пароль и верный логин', function () {
		cy.get(main_page.email).type(data.auth_login);
		cy.get(main_page.password).type('iLoveqastudio');
		cy.get(main_page.login_button).click();
		cy.contains('Такого логина или пароля нет').should('be.visible');
	});

	it('Проверка верный пароль и неверный логин', function () {
		cy.get(main_page.email).type('germannn@dolnikov.ru');
		cy.get(main_page.password).type(data.auth_password);
		cy.get(main_page.login_button).click();
		cy.contains('Такого логина или пароля нет').should('be.visible');
	});

	it('Проверка на невалидную авторизацию', function () {
		cy.get(main_page.email).type('germandolnikov.ru');
		cy.get(main_page.password).type(data.auth_password);
		cy.get(main_page.login_button).click();
		cy.contains('Нужно исправить проблему валидации').should('be.visible');
	});

	it('Проверка на приведение к строчным буквам в логине', function () {
		cy.get(main_page.email).type('GerMan@Dolnikov.ru');
		cy.get(main_page.password).type(data.auth_password);
		cy.get(main_page.login_button).click();
		cy.contains('Авторизация прошла успешно').should('be.visible');
	});
});
