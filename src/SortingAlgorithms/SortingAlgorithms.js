function merger(temp, arr, low, high, animations) {
    if (low >= high) return; // Base case

    const mid = Math.floor((low + high) / 2);

    merger(arr, temp, low, mid, animations);
    merger(arr, temp, mid + 1, high, animations);
    merge(arr, low, mid, high, temp,  animations);
}

function merge(arr, low, mid, high, temp, animations) {
    
    let i = low, j = mid + 1, k = low;

    while (i <= mid && j <= high) {
        const animation = {};
        animation.comparison = [i,j];
        if (temp[i] <= temp[j]) {
            animation.swap = [k, temp[i]];
            arr[k++] = temp[i++];
        } else {
            animation.swap = [k, temp[j]];
            arr[k++] = temp[j++];
        }
        animations.push(animation);
    }


    while (i <= mid) {
        animations.push({
            comparison: [i,i],
            swap: [k,temp[i]],
        })
        arr[k++] = temp[i++];
    }
    while (j <= high) {
        animations.push({
            comparison: [j,j],
            swap: [k,temp[j]],
        })
        arr[k++] = temp[j++];
    }

    
}

export function mergeSort(array){
    const animations = [];
    if (array.length <= 1) return array; 
    const temp = array.slice();
    merger(temp, array, 0, array.length - 1, animations); 
    return animations;
};