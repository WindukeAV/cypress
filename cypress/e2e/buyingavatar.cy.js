function getRandomNumber() {
	return Math.floor(Math.random() * 12) + 1;
}

describe('Покупка нового аватара', function () {
	it('Покупка нового аватара', function () {
		cy.visit('https://pokemonbattle.ru/login');
		// AUTH
		cy.get(':nth-child(1) > .auth__input').type('andyonline1989@gmail.com');
		cy.get('#password').type('ABC123');
		cy.get('.auth__button').click();
		// FOUND AVATAR
		cy.get('.header__container > .header__id').click();
		cy.get('[href="/shop"]').click();
		// GENERATOR OF RANDOM NUMBER
		const randomIndex = getRandomNumber();
		cy.get(`:nth-child(${randomIndex}) > .shop__button`).click();
		// PURCHASE MENU
		cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
		cy.get(':nth-child(1) > .pay_base-input-v2').type('10/25');
		cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
		cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('german dolnikov');
		cy.get('.pay-btn').click();
		// PURCHASE CONFIRMATION
		cy.get('#cardnumber').type('56456');
		cy.get('.payment__submit-button').click();
		cy.wait(4000);
		// BACK TO MAIN MENU
		cy.get('.payment__adv').click();
		// LOG OUT TO MAIN STATE'
		cy.get('.top_menu_exit').click();
	});
});
