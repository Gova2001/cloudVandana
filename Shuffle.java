package cloudVandana;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class Shuffle {

	public static void main(String[] args) {

				Scanner sc=new Scanner(System.in);
				System.out.println("Enter no of elements in Array");
				int n=sc.nextInt();
				Integer[] intArray =new Integer[n];
				System.out.println("Enter "+n+" elements");
				for(int i=0;i<intArray.length;i++)
				{
					intArray[i]=sc.nextInt();
				}	

				List<Integer> intList = Arrays.asList(intArray);

				Collections.shuffle(intList);

				intList.toArray(intArray);

				System.out.println(Arrays.toString(intArray));
		}
}


