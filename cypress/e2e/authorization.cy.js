describe('Авторизация', function () {
	it('Проверка Верный пароль и верный логин', function () {
		cy.visit('login.qa.studio/');
		cy.get('#mail').type('german@dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').click();
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
		cy.contains('Авторизация прошла успешно').should('be.visible');
	});

	it('Проверка кнопки Восстановление пароля', function () {
		cy.visit('login.qa.studio/');
		cy.get('#forgotEmailButton').click();
		cy.get('#mailForgot').type('german@dolnikov.ru');
		cy.get('#restoreEmailButton').click();
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
		cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
	});

	it('Проверка неверный пароль и верный логин', function () {
		cy.visit('login.qa.studio/');
		cy.get('#mail').type('german@dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio');
		cy.get('#loginButton').click();
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
		cy.contains('Такого логина или пароля нет').should('be.visible');
	});

	it('Проверка верный пароль и неверный логин', function () {
		cy.visit('login.qa.studio/');
		cy.get('#mail').type('germannn@dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').click();
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
		cy.contains('Такого логина или пароля нет').should('be.visible');
	});

	it('Проверка на невалидную авторизацию', function () {
		cy.visit('login.qa.studio/');
		cy.get('#mail').type('germandolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').click();
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
		cy.contains('Нужно исправить проблему валидации').should('be.visible');
	});

	it('Проверка на приведение к строчным буквам в логине', function () {
		cy.visit('login.qa.studio/');
		cy.get('#mail').type('GerMan@Dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').click();
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
		cy.contains('Авторизация прошла успешно').should('be.visible');
	});
});
