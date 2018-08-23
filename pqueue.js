// Heap implementation heavily inspired by the one described in
// Introduction to Algorithms

function MaxHeapify(A, i) {
	i_max = i
	left = i*2+1
	right = i*2+2
	if (left < A.length && A[left] > A[i_max])
		i_max = left
	if (right < A.length && A[right] > A[i_max])
		i_max = right
	if (i_max === i)
		return
	tmp = A[i]
	A[i] = A[i_max]
	A[i_max] = tmp
	MaxHeapify(A, i_max)
}

function BuildMaxHeap(A) {
	for (var i = Math.floor(A.length / 2); i >= 0; i--)
		MaxHeapify(A, i)
}

class PriorityQueue {
    
}
