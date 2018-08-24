// Heap implementation heavily inspired by the one described in
// Introduction to Algorithms

function MaxHeapify(A, i, len=A.length) {
	var i_max = i
	var left = i*2+1
	var right = i*2+2
	if (left < len && A[left] > A[i_max])
		i_max = left
	if (right < len && A[right] > A[i_max])
		i_max = right
	if (i_max !== i) {
		[A[i], A[i_max]] = [A[i_max], A[i]]
		MaxHeapify(A, i_max, len)
    }
}

function BuildMaxHeap(A) {
	for (var i = Math.floor(A.length / 2); i >= 0; i--)
		MaxHeapify(A, i)
}

function Heapsort(A) {
	BuildMaxHeap(A)
	for (var i = A.length - 1; i > 0; i--) {
		[A[0], A[i]] = [A[i], A[0]]
		MaxHeapify(A, 0, i)
    }
}

class PriorityQueue {
    
}
