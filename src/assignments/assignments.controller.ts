import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('fibonacci/:n')
  getFibonacciSequence(@Param('n') n: string) {
    const num = parseInt(n, 10);
    
    if (isNaN(num) || num < 1) {
      return { error: 'Please provide a positive integer greater than 0' };
    }

    const sequence = this.calculateFibonacci(num);
    // Serialize the response to ensure it's in a single line
    return JSON.stringify({ sequence });
  }

  private calculateFibonacci(n: number): number[] {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
  }
}
