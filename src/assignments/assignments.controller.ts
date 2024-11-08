import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  @Get('factorial/:number')
  calculateFactorial(@Param('number') number: string) {
    const num = parseInt(number, 10);

    if (isNaN(num) || num < 0) {
      return { error: 'Please provide a valid non-negative integer' };
    }

    const factorial = this.factorial(num);
    return { factorial };
  }

  private factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.factorial(n - 1); // Recursive calculation of factorial
  }
}
