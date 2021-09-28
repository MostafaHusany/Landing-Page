
let sections_offsets = {};

/*
    # Get all section offsets at once !
    So we don't need to recal the document.query every time we need to recheck the conditions in scroll
*/
function create_sections_offsets () {
    let all_sections = document.querySelectorAll('section');
    console.log(all_sections);
    all_sections.forEach(el => {
        // sections_offsets
        sections_offsets[`#${el.id}`] = [
            document.querySelector(`#${el.id}`).offsetTop ,
            document.querySelector(`#${el.id}`).offsetHeight + (document.querySelector(`#${el.id}`).offsetTop - 100)// the 100px is for the navbar hieght
        ]
    })
} 

/*
  # Create event listener for the links, and we will recall this function
  every time we generate a new section element, so we can add the event to the element
*/
function set_link_events () {
    let navigationBtns   = document.querySelectorAll('.navigator-link'); 

    navigationBtns.forEach(el => {
        el.addEventListener('click', e => {
            let target_section_id  = e.target.dataset.target; 
            let target_section     = document.querySelector(target_section_id);
    
            if (target_section != 'undefinde')
                target_section.scrollIntoView({
                    behavior: 'smooth'
                });
    
        });
    });
}

// start inite the sections_offsets
create_sections_offsets();

// start inite click event listner for each link 
set_link_events();


window.addEventListener('scroll', function (e) {
    let section_offsets_keys = Object.keys(sections_offsets);
    section_offsets_keys.forEach((key) => {
        if (sections_offsets[key][0] < window.pageYOffset && sections_offsets[key][1] > window.pageYOffset) {
            document.querySelector(key).classList.add('your-active-class');
            document.querySelector(`[data-target="${key}"]`).classList.add('active_link');
        } else {
            document.querySelector(key).classList.remove('your-active-class')
            document.querySelector(`[data-target="${key}"]`).classList.remove('active_link');
        }
    })// end :: section_offsets_keys
})

// add new sections
let section_counter = 5;
let add_section     = document.querySelector('#add-section');

add_section.addEventListener('click', function () {

    let tmp_section = `
        <section id="section${section_counter}" data-nav="Section ${section_counter}">
            <div class="landing__container">
                <h2>Section ${section_counter}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

                <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
            </div>
        </section>
    `;

    let tmp_section_link = `
        <li class="navigator-link" data-target="#section${section_counter}">section ${section_counter}</li>
    `;

    document.querySelector("main").insertAdjacentHTML("beforeend", tmp_section);
    document.querySelector("#navbar_list_container").insertAdjacentHTML("beforeend", tmp_section_link);
    create_sections_offsets();
    set_link_events();

    section_counter++;
});