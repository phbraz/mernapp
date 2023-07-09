export interface UserListInterface {
  items: Array<{
    Id: number;
    Image: string;
    Name: string;
    PlaceCount: number | number[];
  }>;
}
