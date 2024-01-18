import { BasePage } from './basePage';
/**
 * Class representing a Invoices.
 * @extends BasePage
 */

export class Invoices extends BasePage {

/**
 * Function to  type in the description for the new invoice.
 * @property {String} text Text which needs to be entered.
 * @example
 * invoice.description('This is test description');
*/

description(text){
    cy.get('[name="document-label"]').type(text,{delay:100});
};

clickSave(){

    cy.contains('Speichern'||'Save').click();
};

/**
 * Function to  verify the status of the invoice.
 * @property {String} status value which needs to be entered either german / english
 * @example
 * invoice.verifyStatus('Draft');
*/
verifyStatus(status){

    switch (status) {
        case ('Draft'|| 'Entwurf'):
            cy.get('.sidebar-box.state').find('p').should('contain.value', (status));
            break;
    
        case ('Paid'|| 'Entwurf'):
            break;
    }
    
    



};



clickactionItem(action){

    switch (action) {
        case ('Complete'|| 'Abschließen'):
            ccy.get('.confirmation--box').contains(action).click();
            break;
    
    }

};
	
};