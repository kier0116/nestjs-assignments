import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  @Get('prime/:number')
  checkPrime(@Param('number') number: string) {
    const num = parseInt(number, 10);

    if (isNaN(num) || num < 2) {
      return { isPrime: false }; // Numbers less than 2 are not prime
    }

    const isPrime = this.isPrime(num);
    return { isPrime };
  }

  private isPrime(n: number): boolean {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false; // If divisible by any number, it's not prime
      }
    }
    return true; // It's prime if no divisor found
  }
}
