const tabs = document.querySelectorAll('.tabs li'),
    panels = document.querySelectorAll('.panels article');

function setTab(e)
{
    if(e.type === 'keypress' && e.keyCode !== 13)
    {
        return;
    }
    let tabIndex = Number(this.getAttribute('aria-posinset'))-1;
    for(i = 0; i < tabs.length; i++)
    {
        if(tabs[i].getAttribute('class'))
        {
            tabs[i].removeAttribute('class');
        }
        tabs[i].setAttribute('aria-selected', 'false');
    }

    this.setAttribute('class', 'active-tab');
    this.setAttribute('aria-selected', 'true');
    
    for(i = 0; i < panels.length; i++)
    {
        if ( panels[i].getAttribute('class') )
        { panels[i].removeAttribute('class'); }

        panels[i].setAttribute('aria-hidden', 'true');
    }

    panels[tabIndex].setAttribute('class', 'active-panel');
    panels[tabIndex].setAttribute('aria-hidden', 'false');
}
for (let i=0; i< tabs.length; i++)
{
    tabs[i].addEventListener('click', setTab);
    tabs[i].addEventListener('keypress', setTab);
}