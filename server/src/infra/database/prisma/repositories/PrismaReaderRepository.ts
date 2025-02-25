import { Injectable } from '@nestjs/common';
import { ReaderRepository } from 'src/modules/reader/repositories/readerRepository';
import { PrismaService } from '../prisma.service';
import { Reader } from 'src/modules/reader/entities/reader';
import { PrismaReaderMapper } from '../mappers/PrismaReaderMapper';

@Injectable()
export class PrismaReaderRepository implements ReaderRepository {
  constructor(private prismaService: PrismaService) {}

  async create(reader: Reader): Promise<void> {
    const readerRaw = PrismaReaderMapper.toPrisma(reader);
    await this.prismaService.reader.create({
      data: {
        ...readerRaw,
        birtDate: new Date(readerRaw.createdAt),
      },
    });
  }

  async findByCpf(cpf: string): Promise<Reader | null> {
    const reader = await this.prismaService.reader.findUnique({
      where: { cpf },
    });
    if (!reader) return null;

    return PrismaReaderMapper.toDomain(reader);
  }

  async findById(id: string): Promise<Reader | null> {
    const reader = await this.prismaService.reader.findUnique({
      where: { id },
    });
    if (!reader) return null;

    return PrismaReaderMapper.toDomain(reader);
  }

  async getAll(): Promise<Reader[]> {
    const readers = await this.prismaService.reader.findMany();
    if (!readers) return null;

    return readers.map((reader) => PrismaReaderMapper.toDomain(reader));
  }

  async update(reader: Reader): Promise<void> {
    const readerRaw = PrismaReaderMapper.toPrisma(reader);
    await this.prismaService.reader.update({
      data: readerRaw,
      where: {
        id: reader.id,
      },
    });
  }
}
