const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]')); //only needs to be turned into array for tabPanels.find()

function handleTabClick(event) {
	//hide all tab panels
	// tabPanels.forEach(function(panel) {
	// 	panel.hidden = true;
	// });
	tabPanels.forEach((panel) => (panel.hidden = true));
	//mark all tabs as unselected
	tabButtons.forEach((tab) => {
		tab.setAttribute('aria-selected', false);
	});
	//mark the clicked tab as selected
	event.currentTarget.setAttribute('aria-selected', true);
	//find the associated tabPanel and show it. Method 1
	const id = event.currentTarget.id;
	//const tabPanel = tabs.querySelector(`[aria-labelledby=${id}]`);
	//tabPanel.hidden = false;
	// or another way Method 2
	//Find in the array of tabPanels
	const tabPanel = tabPanels.find((panel) => panel.getAttribute('aria-labelledby') === id);
	tabPanel.hidden = false;
}

tabButtons.forEach((button) => button.addEventListener('click', handleTabClick));
