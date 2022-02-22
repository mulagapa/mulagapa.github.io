fetch("data.json")
.then((res) => res.json())
.then((data) => {
    LocationsinLA(data['section2']);
    LADescription(data['section3'].text);
    featuresAboutLA(data['section4']);
}) 
.catch((err) => console.log(err));


function LocationsinLA(locations){
    var placesElement = document.getElementsByClassName('Places');

    locations.forEach((loc) =>{


        let imageTag = document.createElement('img')
        imageTag.className = 'location'
        imageTag.src = './images/' + loc['image']

        let imageWrapper = document.createElement('div')
        imageWrapper.className = 'location_wrapper'
        imageWrapper.appendChild(imageTag)

        let locwrapper = document.createElement('div')
        locwrapper.className = "locwrapper"

        let heading = document.createElement('div')
        heading.className = 'locheading'
        heading.appendChild(document.createTextNode(loc['heading']))

        let description = document.createElement('small')
        description.className = 'locdescription'
        description.appendChild(document.createTextNode(loc['text']))


        locwrapper.appendChild(heading)
        locwrapper.appendChild(description)

        imageWrapper.appendChild(locwrapper)
        
        placesElement[0].appendChild(imageWrapper)

    })

}

function LADescription(losangeles){
    var laElement = document.getElementsByClassName('content_wrap');

    losangeles.forEach((losang) =>{
        let ladescription = document.createElement('div')
        ladescription.className = 'ladesc'
        ladescription.appendChild(document.createTextNode(losang))

        laElement[0].appendChild(ladescription)
    })

}

function featuresAboutLA(features){
    var lafeatures = document.getElementsByClassName('featurewrapper')
    features.forEach((feat)=>{
        let main = document.createElement('div')
        main.className = feat['heading']

        let heading = document.createElement('div')
        heading.className = feat['heading']+'heading'
        heading.appendChild(document.createTextNode(feat['heading']))

        let featsmall = document.createElement('small')
        featsmall.appendChild(document.createTextNode(feat['text']))

        let featdesc = document.createElement('div')
        featdesc.className = feat['heading']+'desc'
        featdesc.appendChild(featsmall)

        let imageTag = document.createElement('img')
        imageTag.className = feat['heading'] + 'img'
        imageTag.src = './images/' + feat['image']

        let imageWrapper = document.createElement('div')
        imageWrapper.className = feat['heading'] + 'wrapper'
        imageWrapper.appendChild(imageTag)

        lafeatures[0].appendChild(main)
        featdesc.appendChild(heading)
        main.appendChild(featdesc)
        main.appendChild(imageWrapper)

    })
}

