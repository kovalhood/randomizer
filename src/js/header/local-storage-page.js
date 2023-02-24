import { handleNavNumberClick, handleYesNoClick, handleDiceClick, handleCoinClick, handlePasswordClick } from "./navigation";
import { handleMobileNavNumberClick, handleMobileYesNoClick, handleMobileDiceClick, handleMobileCoinClick, handleMobilePasswordClick } from "./mobile-menu";

// Local storage logic for loading previous page on refresh
loadingPreviousPage();

function settingCurrentPage(page) {
    localStorage.setItem('current-page', `${page}`);
}

function loadingPreviousPage() {
    const previousPage = localStorage.getItem('current-page');

    if (previousPage === 'Number') {
        handleNavNumberClick();
        handleMobileNavNumberClick();
        return;
    }

    else if (previousPage === 'YesNo') {
        handleYesNoClick();
        handleMobileYesNoClick();
        return;
    }

    else if (previousPage === 'Dice') {
        handleDiceClick();
        handleMobileDiceClick();
        return;
    }

    else if (previousPage === 'Coin') {
        handleCoinClick();
        handleMobileCoinClick();
        return;
    }

    else if (previousPage === 'Password') {
        handlePasswordClick();
        handleMobilePasswordClick();
        return;
    }
}

export { settingCurrentPage };