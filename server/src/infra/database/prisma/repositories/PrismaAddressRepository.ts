import { Injectable } from '@nestjs/common';
import { AddressRepository } from 'src/modules/address/repositories/AddressRepository';
import { PrismaService } from '../prisma.service';
import { Address } from 'src/modules/address/entities/address';
import { PrismaAddressMapper } from '../mappers/PrismaAddressMapper';

@Injectable()
export class PrismaAddressRepository implements AddressRepository {
  constructor(private prismaService: PrismaService) {}

  async create(address: Address): Promise<void> {
    const addressRaw = PrismaAddressMapper.toPrisma(address);
    await this.prismaService.address.create({
      data: addressRaw,
    });
  }
}
