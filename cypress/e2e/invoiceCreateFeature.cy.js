import {Login} from './pages/login';
import {CommonItem} from './pages/navbar';
import { Client } from './pages/clients';
import { Invoices } from './pages/invoice';

describe('Create Invoice Feature', function() {
	
	const login = new Login();
	const commonItem = new CommonItem();
	const client = new Client();
	const invoice = new Invoices();

	beforeEach(function() {
		login.navigateToUrl('/app');
		//cy.closeCookies();

	});
	
	it(`Should able to create new invoice with existing client`, function() {
		

			login.email('saurabh.verma@aifinyo.de');
			login.password('Welcome@8');
			login.clickloginBtn();

			commonItem.selectmenuitem('invoices');
			commonItem.clickshortcutItem('Neue Rechnung');

			client.searchviaClientNumberandClick('TEST123');
			
			invoice.description('This is test invoice');
			invoice.clickSave();
			invoice.verifyStatus('Entwurf');
			invoice.clickactionItem('Abschließen');
			invoice.clickactionItem('Zustimmen');
			invoice.verifyStatus('Bezahlt');

			

	})
	
	
});