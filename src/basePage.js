export function createTitle(name){
    let title = document.createElement('div');
    title.classList.add('title');
    title.textContent = name;
    let hr = document.createElement('hr');
    hr.classList.add('title-hr')
    title.appendChild(hr);

    return title;
}

export function createSection(desc, hr){
    let section = document.createElement('div');
    section.classList.add('section');

    let subDiv = document.createElement('div');
    subDiv.classList.add('desc');
    subDiv.innerText = desc;
    section.appendChild(subDiv);

    if(hr){
        section.appendChild(document.createElement('hr'));
    }

    return section;
}
