import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ReviewsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createReviewDto: Prisma.ReviewCreateInput) {
    return await this.databaseService.review.create({ data: createReviewDto });
    // return await this.databaseService.review.create({
    //   data: createReviewDto,
    // });
  }

  async findAll() {
    return this.databaseService.review.findMany({});
  }

  async findOne(id: number) {
    return await this.databaseService.review.findUnique({
      where: { id: id },
    });
  }

  async update(id: number, updateReviewDto: Prisma.ReviewUpdateInput) {
    return this.databaseService.review.update({
      where: { id },
      data: updateReviewDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.review.delete({ where: { id } });
  }
}
