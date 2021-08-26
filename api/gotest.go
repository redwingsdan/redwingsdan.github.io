package main

import "fmt"

func main() {
	fmt.Println("Hello World!")
	var secondTest = "my test"
	fmt.Println(secondTest)

	var numTest int16 = 25

	fmt.Println(numTest + 1)

	if numTest == 25 {
		fmt.Printf("The var is %d", numTest)
	} else if numTest > 25 {
		fmt.Printf("The updated var is %d", numTest)
	} else {
		fmt.Printf("Nothing")
	}

	for i := 0; i < 5; i++ {
		fmt.Printf("\nValue is %d", i)
	}
	fmt.Println()
	arrTest := []string{"Daniel", "James", "Peterson"}
	mapTest := map[int]string{
		123: "Daniel",
		456: "James",
		789: "Peterson",
	}
	//works for arrays and maps
	for i, j := range arrTest {
		fmt.Println(i, j)
	}
	for x, y := range mapTest {
		fmt.Println(x, y)
	}

	// using channel
	numberChannel := make(chan int)
	go func() {
		numberChannel <- 100
		numberChannel <- 1000
		numberChannel <- 10000
		numberChannel <- 100000
		close(numberChannel)
	}()
	for i := range numberChannel {
		fmt.Println(i)
	}
	test_function()
	println(area(20, 15))

	var x int = 60
	var y int = 20

	value_swap(x, y)
	fmt.Printf("\nx = %d, y = %d", x, y)
	reference_swap(&x, &y)
	fmt.Printf("\nx = %d, y = %d", x, y)
	fmt.Println()
}

func value_swap(a, b int) int {
	var o int
	o = a
	a = b
	b = o
	return o
}

func reference_swap(a, b *int) int {
	var o int
	o = *a
	*a = *b
	*b = o
	return o
}

func area(length, width int) int {
	Ar := length * width
	return Ar
}

func test_function() {
	println("abc")
}

func create_deck() {
	var deck:Card[] = []
	for i := 0; i < 52; i++ {
		deck.append(Deck{suit: 'hearts', rank: (i % 13) + 1})
	}
}

type Card struct {
	suit string
	rank int8
}
