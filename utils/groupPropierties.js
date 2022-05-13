

function groupPropierties(eaters, nGroups, groupSize, remain) {

    while (!nGroups) {

        if ((eaters.length % groupSize) <= (Math.floor(eaters.length / groupSize))) {
            nGroups = Math.floor(eaters.length / groupSize)
            remain = eaters.length - (nGroups * groupSize)

            if (remain !== 0 && groupSize == 7) {
                groupSize--
                nGroups = false
            }
        } else { groupSize = groupSize - 1 }
    }
    return (groupSize, nGroups)

}


module.exports = { groupPropierties }