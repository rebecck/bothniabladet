import { Table } from "react-bootstrap";
import { Image } from "../../app/models/image";
interface Props {
    images: Image[];
}

export default function ImageResultTable({ images }: Props) {
    return (
        <Table responsive striped bordered hover variant="dark" className="search-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image Name</th>
            <th>File Path</th>
            <th>Description</th>
            <th>Created Date</th>
            <th>Longitude</th>
            <th>Latitude</th>
            <th>Is External</th>
            <th>Publication Limit</th>
            <th>Times Publicated</th>
            <th>Width</th>
            <th>Height</th>
            <th>File Size (KB)</th>
            <th>Resolution</th>
            <th>Camera</th>
          </tr>
        </thead>
        <tbody>
          {images.map((image) => (
            <tr key={image.id}>
              <td>{image.id}</td>
              <td>{image.imgName}</td>
              <td>{image.filePath}</td>
              <td>{image.description}</td>
              <td>{image.createdDateTime}</td>
              <td>{image.longitude}</td>
              <td>{image.latitude}</td>
              <td>{image.isExtern ? 'Yes' : 'No'}</td>
              <td>{image.publicationLimit}</td>
              <td>{image.timesPublicated}</td>
              <td>{image.width}</td>
              <td>{image.height}</td>
              <td>{image.fileSizeKB}</td>
              <td>{image.resolution}</td>
              <td>{image.camera}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
}