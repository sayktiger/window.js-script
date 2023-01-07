import changeModalState from "./changeModalForms";
const modals = () => {
    function bindModals(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true){
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll(`[data-modal]`),
            scroll = calcScroll();
        trigger.forEach(item => {
            item.addEventListener(`click`, (e) =>{
                if (e.targer){
                    e.preventDefault();
                }
                windows.forEach(item =>{
                    item.style.display = `none`;
                });
                
                
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                
            });

            
        });
        

        close.addEventListener(`click`, (e) =>{
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            document.body.style.marginRight = `0px`;
            windows.forEach(item =>{
                item.style.display = `none`;
            });
        });

        modal.addEventListener(`click`, (e) =>{
            if(e.target === modal && closeClickOverlay){
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                document.body.style.marginRight = `0px`;
            }


        });
    }
    

    function showModalBindTime(selector, time){


        setTimeout(()=>{
            document.querySelector(selector).style.display = `block`;
            document.body.style.overflow = 'hidden';
        },time);
    };


    function calcScroll(){
        let div = document.createElement(`div`);

        div.style.width = `50px`;
        div.style.height = `50px`;
        div.style.overflowY = `scroll`;
        div.style.visibility = `hidden`;
        
        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove()

        return scrollWidth;
    }

    bindModals(`.popup_engineer_btn`, `.popup_engineer`, `.popup_engineer .popup_close`);
    bindModals(`.phone_link`, `.popup`, `.popup .popup_close`);
    bindModals(`.popup_calc_btn`, `.popup_calc`, `.popup_calc_close`);
    bindModals(`.popup_calc_button`, `.popup_calc_profile`, `.popup_calc_profile_close`, false);
    bindModals(`.popup_calc_profile_button`, `.popup_calc_end`, `.popup_calc_end_close`,false);
    // showModalBindTime(`.popup` , 60000);
};

export default modals;